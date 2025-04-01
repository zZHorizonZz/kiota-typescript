import { assert, describe, it } from "vitest";
import { TextSerializationWriter } from "../../src";
import { convertDateToISO8601WithTimezone } from "../../../utils/dateUtils";

describe("TextSerializationWriter", () => {
	it("writeEnumValue", () => {
		const textSerializationWriter = new TextSerializationWriter();

		const statuses = [LongRunningOperationStatusObject.NotStarted, LongRunningOperationStatusObject.Running];
		textSerializationWriter.writeEnumValue("", ...statuses);
		const formContent = textSerializationWriter.getSerializedContent();
		const form = new TextDecoder().decode(formContent);
		const expectedString = "notStarted,running";
		assert.equal(form, expectedString);
	});
	it("writeCollectionOfEnumValues", () => {
		const textSerializationWriter = new TextSerializationWriter();
		const statuses = [LongRunningOperationStatusObject.NotStarted, LongRunningOperationStatusObject.Running];
		textSerializationWriter.writeCollectionOfEnumValues("", statuses);
		const formContent = textSerializationWriter.getSerializedContent();
		const form = new TextDecoder().decode(formContent);
		const expectedString = "notStarted,running";
		assert.equal(form, expectedString);
	});
	it("writeDateValue", () => {
		const textSerializationWriter = new TextSerializationWriter();
		const testDate = new Date("2023-08-30T12:34:56.789Z");
		textSerializationWriter.writeDateValue("", testDate);
		const formContent = textSerializationWriter.getSerializedContent();
		const form = new TextDecoder().decode(formContent);
		const expectedString = "2023-08-30T12:34:56+00:00";
		assert.equal(form, expectedString);
	});
	it("convertDateToISO8601WithTimezone", () => {
		const testDate = new Date("2023-08-30T12:34:56.789Z");
		const expectedDateString = "2023-08-30T12:34:56+00:00";
		const actualDateString = convertDateToISO8601WithTimezone(testDate);
		assert.equal(actualDateString, expectedDateString);
	});
});

export const LongRunningOperationStatusObject = {
	NotStarted: "notStarted",
	Running: "running",
	Succeeded: "succeeded",
	Failed: "failed",
	UnknownFutureValue: "unknownFutureValue",
} as const;
