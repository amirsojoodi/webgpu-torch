import { Device  } from "./device";
import { Dtype } from "./dtype";
import { Shape, defaultStrides, shapeSize } from "./shape";
import { TensorArrayData, TensorImpl } from "./tensor_if";
import { TensorCPU } from "./tensor_cpu";
import { TensorWebGPU } from "./tensor_webgpu";
import { GPUBufferStorage, UntypedStorage, newTypedArrayFromArray } from "./storage";

export class DeviceWebGPU extends Device {
    device: GPUDevice;
    constructor(id: string, adapter: GPUAdapter, device: GPUDevice) {
        super(id, "webgpu");
        this.device = device;
    }
    alloc(byteSize: number): UntypedStorage {
        return new GPUBufferStorage(byteSize, GPUBufferUsage.STORAGE, this.device);
    }
    ones(shape: Shape, dtype: Dtype): TensorImpl {
        const storage = this.allocFor(shape, dtype) as GPUBufferStorage;
        const strides = defaultStrides(shape);
        return new TensorWebGPU(storage, dtype, shape, strides, this);
    }
    tensor(data: TensorArrayData | null, dtype: Dtype): TensorImpl {
        const info = newTypedArrayFromArray(data, dtype, shape => this.allocFor(shape, dtype));
        return new TensorWebGPU(info.storage as GPUBufferStorage, dtype, info.shape, info.strides, this);
    }
    zeros(shape: Shape, dtype: Dtype): TensorImpl {
        throw new Error("Method not implemented.");
    }
}
