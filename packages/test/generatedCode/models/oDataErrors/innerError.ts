// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function createInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInnerError;
}
export function deserializeIntoInnerError(innerError: InnerError | undefined = {} as InnerError) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
export interface InnerError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
export function serializeInnerError(writer: SerializationWriter, innerError: InnerError | undefined = {} as InnerError) : void {
        writer.writeAdditionalData(innerError.additionalData);
}
// tslint:enable
// eslint-enable
