import { Device } from "./device";
import { DeviceWebGPU } from "./device_webgpu";
import { Dtype, dtypeByteSize } from "./dtype";
import { Shape, Strides, defaultStrides } from "./shape";
import { GPUBufferStorage } from "./storage";
import { TensorImpl } from "./tensor_if";

export class TensorWebGPU extends TensorImpl {
    private _storage: GPUBufferStorage;
    private _dtype: Dtype;
    private _shape: number[];
    private _strides: number[];
    private _device: DeviceWebGPU;

    get gpuBuffer(): GPUBuffer {
        return this._storage.gpuBuffer;
    }
    get gpuDevice(): GPUDevice {
        return this._device.gpuDevice;
    }

    get storage(): GPUBufferStorage {
        return this._storage;
    }
    get dtype(): Dtype {
        return this._dtype;
    }
    get shape(): number[] {
        return this._shape;
    }
    get strides(): number[] {
        return this._strides;
    }
    get device(): Device {
        return this._device;
    }

    constructor(
        storage: GPUBufferStorage,
        dtype: Dtype,
        shape: Shape,
        strides: Strides,
        device: DeviceWebGPU
    ) {
        super();
        this._storage = storage;
        this._dtype = dtype;
        this._shape = shape;
        this._strides = strides;
        this._device = device;
    }

    withShape(shape: Shape, strides: Strides): TensorWebGPU {
        return new TensorWebGPU(
            this._storage,
            this._dtype,
            shape,
            strides,
            this._device
        );
    }

    add_(other: TensorWebGPU, alpha?: number): TensorWebGPU {
        const kernel = this._device.getKernel("Add", { resultDtype: "f32" });
        const params = {
            resultSize: this.shape.reduce((a, b) => a * b),
            alpha: alpha || 1.0,
        };
        kernel.run([this.gpuBuffer, other.gpuBuffer], params, [this.gpuBuffer]);
        return this;
    }
    mm(other: TensorWebGPU): TensorWebGPU {
        const kernel = this._device.getKernel("MM", { resultDtype: "f32" });
        const params = {
            resultRows: this.shape[0],
            resultCols: other.shape[1],
            innerDim: this.shape[1],
            alpha: 1.0,
        };
        this.gpuBuffer.unmap();
        other.gpuBuffer.unmap();
        const outputs = kernel.run([this.gpuBuffer, other.gpuBuffer], params);
        const readBuffer = outputs[0];
        const readStorage = new GPUBufferStorage(readBuffer, this.gpuDevice);
        const resultShape = [params.resultRows, params.resultCols];
        const readTensor = new TensorWebGPU(
            readStorage,
            this.dtype,
            resultShape,
            defaultStrides(resultShape),
            this._device
        );
        return readTensor;
    }
    sum(axis: number | null): TensorImpl {
        throw new Error("Sum not implemented.");
    }
}
