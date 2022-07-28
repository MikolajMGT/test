export interface RequestInfo {
	path: string,
	description?: string,
}

export const ListFilesInfo = {
	path: 'v1/files/list',
	description: 'You can list uploaded files through API also.',
}

export const ListBasePresetsInfo = {
	path: 'v1/base-presets/list',
	description: 'You can list predefined presets through API also.',
}

export const ListCustomPresetsInfo = {
	path: 'v1/custom-presets/list',
	description: 'You can list created custom presets through API also.',
}

export const CreateCustomPresetInfo = {
	path: 'v1/custom-presets/create',
	description: 'You can create your custom preset through API also.',
}

export const UpdateCustomPresetInfo = {
	path: 'v1/custom-presets/update',
	description: 'You can update your custom preset through API also.',
}

export const CreateJobInfo = {
	path: 'v1/jobs/create',
	description: 'You can create this specific job through API also.',
}
