// Generated by scripts/codegen.ts
// Do not edit this file directly.
import { KernelSpec } from "./kernel";

export const kernels: { [name: string]: KernelSpec } =
{
    "abs": {
        "name": "abs",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = abs(input[global_id.x]);"
    },
    "abs_": {
        "name": "abs_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = abs(input[global_id.x]);"
    },
    "acos": {
        "name": "acos",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = acos(input[global_id.x]);"
    },
    "acos_": {
        "name": "acos_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = acos(input[global_id.x]);"
    },
    "acosh": {
        "name": "acosh",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = acosh(input[global_id.x]);"
    },
    "acosh_": {
        "name": "acosh_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = acosh(input[global_id.x]);"
    },
    "add": {
        "name": "add",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            },
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = (input[global_id.x] + other[global_id.x]);"
    },
    "add_": {
        "name": "add_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = (input[global_id.x] + other[global_id.x]);"
    },
    "asin": {
        "name": "asin",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = asin(input[global_id.x]);"
    },
    "asin_": {
        "name": "asin_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = asin(input[global_id.x]);"
    },
    "asinh": {
        "name": "asinh",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = asinh(input[global_id.x]);"
    },
    "asinh_": {
        "name": "asinh_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = asinh(input[global_id.x]);"
    },
    "atan": {
        "name": "atan",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = atan(input[global_id.x]);"
    },
    "atan_": {
        "name": "atan_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = atan(input[global_id.x]);"
    },
    "atan2": {
        "name": "atan2",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            },
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = atan2(input[global_id.x], other[global_id.x]);"
    },
    "atan2_": {
        "name": "atan2_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = atan2(input[global_id.x], other[global_id.x]);"
    },
    "sub": {
        "name": "sub",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "input",
                "shaderType": "array<f32>"
            },
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "out",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        out[global_id.x] = (input[global_id.x] - other[global_id.x]);"
    },
    "sub_": {
        "name": "sub_",
        "config": [
            {
                "name": "dtype"
            }
        ],
        "parameters": [
            {
                "name": "size",
                "shaderType": "u32"
            }
        ],
        "inputs": [
            {
                "name": "other",
                "shaderType": "array<f32>"
            }
        ],
        "outputs": [
            {
                "name": "input",
                "shaderType": "array<f32>",
                "size": "size"
            }
        ],
        "workgroupSize": [
            64,
            1,
            1
        ],
        "workgroupCount": [
            "size/8",
            1,
            1
        ],
        "shader": "\n        if (global_id.x >= parameters.size) {\n            return;\n        }\n        input[global_id.x] = (input[global_id.x] - other[global_id.x]);"
    }
};