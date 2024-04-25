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
export declare type ParkinfoUpdateFormInputValues = {
    floors?: string;
    no_spots?: number;
    capacity?: string;
    description?: string;
};
export declare type ParkinfoUpdateFormValidationValues = {
    floors?: ValidationFunction<string>;
    no_spots?: ValidationFunction<number>;
    capacity?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParkinfoUpdateFormOverridesProps = {
    ParkinfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    floors?: PrimitiveOverrideProps<TextFieldProps>;
    no_spots?: PrimitiveOverrideProps<TextFieldProps>;
    capacity?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParkinfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ParkinfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    parkinfo?: any;
    onSubmit?: (fields: ParkinfoUpdateFormInputValues) => ParkinfoUpdateFormInputValues;
    onSuccess?: (fields: ParkinfoUpdateFormInputValues) => void;
    onError?: (fields: ParkinfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParkinfoUpdateFormInputValues) => ParkinfoUpdateFormInputValues;
    onValidate?: ParkinfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ParkinfoUpdateForm(props: ParkinfoUpdateFormProps): React.ReactElement;
