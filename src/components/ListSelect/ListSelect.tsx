import React, {FC, useEffect, useState} from 'react';
import {ListSelectS, ListSelectS_Container, ListSelectS_Header, ListSelectS_Info} from './ListSelectS';
import {Col, Table, Typography} from 'antd';
import {TableRowSelection} from 'antd/lib/table/interface';

export interface ListSelectEntry {
	key: string,
	name: string | JSX.Element,
}

export interface ListSelectProps {
	leftTitle: string | JSX.Element;
	rightTitle: string | JSX.Element;
	selectedContent: JSX.Element;
	entries: ListSelectEntry[];
	setSelectedRow: (arg: ListSelectEntry | undefined) => void;
}

export const ListSelect: FC<ListSelectProps> = (props) => {
	const {leftTitle, rightTitle, selectedContent, entries, setSelectedRow} = props;

	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const columns = [
		{
			title: <Typography.Text style={{fontWeight: 600}}>{leftTitle}</Typography.Text>,
			dataIndex: 'name',
			render: (text: string) => <Typography.Text style={{cursor: 'pointer'}}>{text}</Typography.Text>
		}
	];

	const rowSelection: TableRowSelection<ListSelectEntry> = {
		onChange: (selectedRowKeys, selectedRows) => {
			setSelectedRow(selectedRows.length ? selectedRows[0] : undefined);
			setSelectedRowKeys(selectedRowKeys);
		}
	};

	useEffect(() => {
		if (selectedRowKeys.length) {
			const current = entries.filter((entry) => entry.key === selectedRowKeys[0] as string);
			current.length && setSelectedRow(current[0]);
		}
	}, [selectedRowKeys]);

	return (
		<ListSelectS {...props}>
			<ListSelectS_Container>
				<Table
					rowSelection={{
						type: 'radio',
						selectedRowKeys: selectedRowKeys,
						...rowSelection
					}}
					columns={columns}
					pagination={false}
					dataSource={entries}
					onRow={(r) => ({
						onClick: () => {
							setSelectedRowKeys([r.key]);
						}
					})}
				/>
				<ListSelectS_Info>
					<Col style={{width: '100%'}}>
						<ListSelectS_Header>
							<Typography.Text>{rightTitle}</Typography.Text>
						</ListSelectS_Header>
						{selectedContent}
					</Col>
				</ListSelectS_Info>
			</ListSelectS_Container>
		</ListSelectS>
	);
};
