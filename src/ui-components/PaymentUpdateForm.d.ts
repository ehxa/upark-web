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
export declare type PaymentUpdateFormInputValues = {
    card_number?: string;
    first_name?: string;
    surname?: string;
    cvc?: number;
    phone?: string;
    exp_date?: string;
};
export declare type PaymentUpdateFormValidationValues = {
    card_number?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    cvc?: ValidationFunction<number>;
    phone?: ValidationFunction<string>;
    exp_date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentUpdateFormOverridesProps = {
    PaymentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    card_number?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    cvc?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    exp_date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PaymentUpdateFormProps = React.PropsWithChildren<{
    overrides?: PaymentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    payment?: any;
    onSubmit?: (fields: PaymentUpdateFormInputValues) => PaymentUpdateFormInputValues;
    onSuccess?: (fields: PaymentUpdateFormInputValues) => void;
    onError?: (fields: PaymentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentUpdateFormInputValues) => PaymentUpdateFormInputValues;
    onValidate?: PaymentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentUpdateForm(props: PaymentUpdateFormProps): React.ReactElement;
