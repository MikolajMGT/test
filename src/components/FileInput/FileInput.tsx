import React, {ChangeEvent, FC, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FileInputS} from './FileInputS';
import {Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

export interface FileInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: FC<FileInputProps> = (props) => {
	const {onChange} = props;
	const ref = useRef<HTMLInputElement | null>(null);
	const inputId = uuidv4();

	return <FileInputS>
		<label htmlFor={inputId} className="pointer">
			<Button icon={<UploadOutlined/>} type="primary" onClick={() => ref.current?.click()}>Upload Files</Button>
		</label>
		<input id={inputId}
		       ref={ref}
		       type="file"
		       multiple
		       onChange={(e) => onChange(e)}/>
	</FileInputS>;
};
