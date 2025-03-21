/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module RedirectHandlerOptions
 */

import type { RequestOption } from "@microsoft/kiota-abstractions";

/**
 *
 * A type declaration for shouldRetry callback
 */
export type ShouldRedirect = (response: Response) => boolean;

export const RedirectHandlerOptionKey = "RedirectHandlerOption";

export interface RedirectHandlerOptionsParams {
	maxRedirects?: number;
	shouldRedirect?: ShouldRedirect;
}

/**
 * MiddlewareOptions
 * A class representing RedirectHandlerOptions
 */
export class RedirectHandlerOptions implements RequestOption {
	/**
	 * A member holding default max redirects value
	 */
	private static readonly DEFAULT_MAX_REDIRECTS = 5;

	/**
	 * A member holding maximum max redirects value
	 */
	private static readonly MAX_MAX_REDIRECTS = 20;

	/**
	 *
	 * A member holding default shouldRedirect callback
	 * @returns true
	 */
	private static readonly defaultShouldRetry: ShouldRedirect = () => true;

	/**
	 *
	 * A member holding the max redirects value
	 */
	public maxRedirects: number;

	/**
	 *
	 * A member holding the should redirect callback
	 */
	public shouldRedirect: ShouldRedirect;

	/**
	 *
	 * To create an instance of RedirectHandlerOptions
	 * @param [options] - The redirect handler options instance
	 * @returns An instance of RedirectHandlerOptions
	 * @throws Error if maxRedirects is more than 20 or less than 0
	 * @example	const options = new RedirectHandlerOptions({ maxRedirects: 5 });
	 */
	public constructor(options: Partial<RedirectHandlerOptionsParams> = {}) {
		if (options.maxRedirects && options.maxRedirects > RedirectHandlerOptions.MAX_MAX_REDIRECTS) {
			const error = new Error(`MaxRedirects should not be more than ${RedirectHandlerOptions.MAX_MAX_REDIRECTS}`);
			error.name = "MaxLimitExceeded";
			throw error;
		}
		if (options.maxRedirects !== undefined && options.maxRedirects < 0) {
			const error = new Error(`MaxRedirects should not be negative`);
			error.name = "MinExpectationNotMet";
			throw error;
		}
		this.maxRedirects = options.maxRedirects ?? RedirectHandlerOptions.DEFAULT_MAX_REDIRECTS;
		this.shouldRedirect = options.shouldRedirect ?? RedirectHandlerOptions.defaultShouldRetry;
	}

	public getKey(): string {
		return RedirectHandlerOptionKey;
	}
}
