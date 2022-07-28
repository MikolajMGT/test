import React, {FC} from 'react';
import {Page} from '../../../../components/Page/Page';
import {AdminToolsS} from './AdminToolsS';
import {Tabs} from 'antd';
import {UsersManagement} from './UsersManagement/UsersManagement';

const {TabPane} = Tabs;

export const AdminTools: FC = () => {

	return (
		<Page tab="none">
			<AdminToolsS>
				<Tabs centered defaultActiveKey="1">
					<TabPane tab="Users Management" key="1">
						<UsersManagement/>
					</TabPane>
				</Tabs>
			</AdminToolsS>
		</Page>
	);
};
