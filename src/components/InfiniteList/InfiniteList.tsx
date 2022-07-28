import React, {FC, useEffect, useState} from 'react';
import {Collapse, Divider, List, Skeleton} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {InfiniteListS} from './InfiniteListS';

export interface ListItemProps {
	id: string;
	image?: string | JSX.Element;
	title?: string | JSX.Element;
	description?: string | JSX.Element;
	onClick?: () => void;
	actions?: JSX.Element[];
	collapsedContent?: JSX.Element;
}

export interface InfiniteListProps {
	total: number;
	loader: () => Promise<ListItemProps[]>;

	height?: string;
	header?: string | JSX.Element;
	idToRemove?: string;
	overrideItems?: ListItemProps[];
}

const {Panel} = Collapse;

export const InfiniteList: FC<InfiniteListProps> = (props) => {
	const {header, total, loader, idToRemove, overrideItems} = props;

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<ListItemProps[]>([]);

	useEffect(() => {
		setData(data.filter((entry) => entry.id !== idToRemove));
	}, [idToRemove]);

	useEffect(() => {
		overrideItems && setData(overrideItems);
	}, [overrideItems]);

	const loadMoreData = async () => {
		if (loading) {
			return;
		}
		setLoading(true);

		try {
			setData([...data, ...await loader()]);
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async function () {
			await loadMoreData();
		})();
	}, []);

	const listItem = (item: ListItemProps) => (
		<List.Item
			key={`list-item-${item.id}`}
			actions={item.actions}
		>
			<List.Item.Meta
				avatar={item.image}
				title={item.title}
				description={item.description}
			/>
		</List.Item>
	);

	return (
		<InfiniteListS id="scrollableDiv" {...props}>
			<InfiniteScroll
				dataLength={data.length}
				next={loadMoreData}
				hasMore={data.length < total}
				loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
				endMessage={data.length ? <Divider plain>It is all, nothing more 🤐</Divider> : null}
				scrollableTarget="scrollableDiv"
			>
				<List
					header={header}
					dataSource={data}
					renderItem={(item) => {
						return (
							<div key={`list-item-wrapper-${item.id}`}>{
								item.collapsedContent ?
									<Collapse expandIconPosition="right">
										<Panel key={`list-item-panel-${item.id}`} header={listItem(item)}>
											{item.collapsedContent}
										</Panel>
									</Collapse>
									:
									listItem(item)
							}</div>
						);
					}}
				/>
			</InfiniteScroll>
		</InfiniteListS>
	);
};
