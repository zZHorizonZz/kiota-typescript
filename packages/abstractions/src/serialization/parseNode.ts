/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import type { Guid } from "guid-typescript";

import type { DateOnly } from "../dateOnly";
import type { Duration } from "../duration";
import type { TimeOnly } from "../timeOnly";
import type { Parsable } from "./parsable";
import type { ParsableFactory } from "./parsableFactory";

/**
 * Interface for a deserialization node in a parse tree. This interface provides an abstraction layer over serialization formats, libraries and implementations.
 */
export interface ParseNode {
	/**
	 * Gets the string value of the node.
	 * @return the string value of the node.
	 */
	getStringValue(): string | null | undefined;
	/**
	 * Gets a new parse node for the given identifier.
	 * @param identifier the identifier of the current node property.
	 * @return a new parse node for the given identifier.
	 */
	getChildNode(identifier: string): ParseNode | null | undefined;
	/**
	 * Gets the boolean value of the node.
	 * @return the boolean value of the node.
	 */
	getBooleanValue(): boolean | null | undefined;
	/**
	 * Gets the Number value of the node.
	 * @return the Number value of the node.
	 */
	getNumberValue(): number | null | undefined;
	/**
	 * Gets the Guid value of the node.
	 * @return the Guid value of the node.
	 */
	getGuidValue(): Guid | null | undefined;
	/**
	 * Gets the Date value of the node.
	 * @return the Date value of the node.
	 */
	getDateValue(): Date | null | undefined;
	/**
	 * Gets the Duration value of the node.
	 * @return the Duration value of the node.
	 */
	getDurationValue(): Duration | null | undefined;
	/**
	 * Gets the DateOnly value of the node.
	 * @return the DateOnly value of the node.
	 */
	getDateOnlyValue(): DateOnly | null | undefined;
	/**
	 * Gets the TimeOnly value of the node.
	 * @return the TimeOnly value of the node.
	 */
	getTimeOnlyValue(): TimeOnly | null | undefined;
	/**
	 * Gets the collection of primitive values of the node.
	 * @return the collection of primitive values of the node.
	 */
	getCollectionOfPrimitiveValues<T>(): T[] | null | undefined;
	/**
	 * Gets the collection of object values of the node.
	 * @return the collection of object values of the node.
	 */
	getCollectionOfObjectValues<T extends Parsable>(parsableFactory: ParsableFactory<T>): T[] | null | undefined;

	/**
	 * Gets the model object value of the node.
	 * @return the model object value of the node.
	 */
	getObjectValue<T extends Parsable>(parsableFactory: ParsableFactory<T>): T | null;

	/**
	 * Gets the Enum values of the node.
	 * @return the Enum values of the node.
	 */
	getCollectionOfEnumValues<T>(type: any): T[] | null;
	/**
	 * Gets the Enum value of the node.
	 * @return the Enum value of the node.
	 */
	getEnumValue<T>(type: any): T | null | undefined;
	/**
	 * Gets the callback called before the node is deserialized.
	 * @return the callback called before the node is deserialized.
	 */
	onBeforeAssignFieldValues: ((value: Parsable) => void) | undefined;
	/**
	 * Gets the callback called after the node is deserialized.
	 * @return the callback called after the node is deserialized.
	 */
	onAfterAssignFieldValues: ((value: Parsable) => void) | undefined;
	/**
	 * Gets the byte array value of the node.
	 * @return the byte array value of the node.
	 */
	getByteArrayValue(): ArrayBuffer | undefined;
}
