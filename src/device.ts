import { Shape, shapeSize } from "./shape";
import { ATypedArray, Dtype, dtypeByteSize } from "./dtype";
import type { UntypedStorage, BufferHeap, HeapBuffer } from "./storage";
import {
    Kernel,
    KernelConfig,
    KernelConfigInput,
    KernelKey,
    KernelSpec,
    getKernelConfig,
    getKernelKey,
} from "./kernel";
import { registry as kernelRegistry } from "./kernels";

export type DeviceType = "cpu" | "webgpu";
export type DeviceId = string;

export type Deviceish = DeviceType | Device | DeviceId;

export abstract class Device {
    private _id: DeviceId;
    private _type: DeviceType;
    private _kernels: { [key: KernelKey]: Kernel } = {};
    private _heaps: BufferHeap<GPUBuffer | ArrayBuffer>[] = [];
    private _heapFinalizers: FinalizationRegistry<HeapBuffer<GPUBuffer | ArrayBuffer>>;
    get id(): DeviceId {
        return this._id;
    }
    get type(): DeviceType {
        return this._type;
    }
    abstract get workgroupMaxSize(): [number, number, number];
    abstract get workgroupMaxCount(): number;
    constructor(id: DeviceId, type: DeviceType) {
        this._id = id;
        this._type = type;
        this._heapFinalizers = new FinalizationRegistry<HeapBuffer<GPUBuffer | ArrayBuffer>>(
            (buffer) => {
                console.log("Finalizing heap buffer", buffer);
                buffer.free();
            }
        );
    }
    abstract alloc(byteSize: number): UntypedStorage;
    allocFor(shape: Shape, dtype: Dtype): UntypedStorage {
        const elementByteSize = dtypeByteSize(dtype);
        const byteSize = shapeSize(shape) * elementByteSize;
        return this.alloc(byteSize);
    }
    abstract allocBufferHeap(): BufferHeap<GPUBuffer | ArrayBuffer>;
    abstract createHeapStorage(buffer: HeapBuffer<GPUBuffer | ArrayBuffer>): UntypedStorage;
    heapAlloc(byteSize: number): UntypedStorage {
        let resultBuffer: HeapBuffer<GPUBuffer | ArrayBuffer> | null = null;
        for (let heap of this._heaps) {
            const buffer = heap.alloc(byteSize);
            if (buffer !== null) {
                resultBuffer = buffer;
            }
        }
        if (resultBuffer === null) {
            const heap = this.allocBufferHeap();
            // console.log("Allocated buffer heap of size", heap.size);
            this._heaps.push(heap);
            resultBuffer = heap.alloc(byteSize);
            if (resultBuffer === null) {
                throw new Error(`Out of memory when trying to allocate buffer of size ${byteSize}. Heap size is ${heap.size}.`);
            }
        }
        const storage = this.createHeapStorage(resultBuffer);
        this._heapFinalizers.register(storage, resultBuffer);
        // console.log("Allocated heap buffer of size", resultBuffer.byteSize);
        return storage;
    }
    getKernel(name: string, config: KernelConfigInput): Kernel {
        const spec = kernelRegistry[name];
        if (spec === undefined) {
            throw new Error(`Kernel "${name}" not found`);
        }
        const kconfig = getKernelConfig(spec, config);
        const key = getKernelKey(spec, kconfig);
        let kernel = this._kernels[key];
        if (kernel === undefined) {
            kernel = this.createKernel(spec, kconfig);
            this._kernels[key] = kernel;
        }
        return kernel;
    }
    abstract createKernel(spec: KernelSpec, config: KernelConfig): Kernel;
    abstract getBufferForKernel(
        storage: UntypedStorage,
        dtype: Dtype
    ): ATypedArray | GPUBuffer;
    abstract getStorageFromKernel(
        buffer: ATypedArray | GPUBuffer,
        pooled: boolean
    ): UntypedStorage;
}
