// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota

export const SensitivityObject = {
    Normal: "normal",
    Personal: "personal",
    Private: "private",
    Confidential: "confidential",
}  as const;
export type Sensitivity = (typeof SensitivityObject)[keyof typeof SensitivityObject];
// tslint:enable
// eslint-enable
