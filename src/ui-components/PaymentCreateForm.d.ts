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
export declare type PaymentCreateFormInputValues = {
    card_number?: string;
    first_name?: string;
    surname?: string;
    cvc?: number;
    phone?: string;
    exp_date?: string;
};
export declare type PaymentCreateFormValidationValues = {
    card_number?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    cvc?: ValidationFunction<number>;
    phone?: ValidationFunction<string>;
    exp_date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentCreateFormOverridesProps = {
    PaymentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    card_number?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    cvc?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    exp_date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentCreateFormInputValues) => PaymentCreateFormInputValues;
    onSuccess?: (fields: PaymentCreateFormInputValues) => void;
    onError?: (fields: PaymentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentCreateFormInputValues) => PaymentCreateFormInputValues;
    onValidate?: PaymentCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentCreateForm(props: PaymentCreateFormProps): React.ReactElement;
