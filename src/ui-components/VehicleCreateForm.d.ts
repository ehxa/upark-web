/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VehicleCreateFormInputValues = {
    plate?: string;
    type?: string;
};
export declare type VehicleCreateFormValidationValues = {
    plate?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VehicleCreateFormOverridesProps = {
    VehicleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    plate?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VehicleCreateFormProps = React.PropsWithChildren<{
    overrides?: VehicleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VehicleCreateFormInputValues) => VehicleCreateFormInputValues;
    onSuccess?: (fields: VehicleCreateFormInputValues) => void;
    onError?: (fields: VehicleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VehicleCreateFormInputValues) => VehicleCreateFormInputValues;
    onValidate?: VehicleCreateFormValidationValues;
} & React.CSSProperties>;
export default function VehicleCreateForm(props: VehicleCreateFormProps): React.ReactElement;
