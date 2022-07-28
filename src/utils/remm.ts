import {rem} from 'polished';

export const ROOT_FONT_SIZE = '16px';

export function remm(value: string | number) {
	return rem(value, ROOT_FONT_SIZE);
}
