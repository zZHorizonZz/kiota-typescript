// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { BodyType, BodyTypeObject } from './bodyType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function createItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemBody;
}
export function deserializeIntoItemBody(itemBody: ItemBody | undefined = {} as ItemBody) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { itemBody.content = n.getStringValue(); },
        "contentType": n => { itemBody.contentType = n.getEnumValue<BodyType>(BodyTypeObject); },
    }
}
export interface ItemBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content of the item.
     */
    content?: string;
    /**
     * The contentType property
     */
    contentType?: BodyType;
}
export function serializeItemBody(writer: SerializationWriter, itemBody: ItemBody | undefined = {} as ItemBody) : void {
    writer.writeStringValue("content", itemBody.content);
    writer.writeEnumValue<BodyType>("contentType", itemBody.contentType);
    writer.writeAdditionalData(itemBody.additionalData);
}
// tslint:enable
// eslint-enable
