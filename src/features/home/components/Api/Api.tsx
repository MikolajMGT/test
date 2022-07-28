import React, {FC} from 'react';
import {Page} from '../../../../components/Page/Page';
import homeImage from '../../../../assets/home.svg';
import {Button, Col, Input, Row, Space, Tooltip, Typography} from 'antd';
import {ApiS, ApiS_LeftPart, ApiS_Main, ApiS_RightPart} from './ApiS';
import {envVars} from '../../../../config/envs/env';
import {CopyOutlined} from '@ant-design/icons';
import {useAppSelector} from '../../../../stores/hooks';
import {selectUser} from '../../../../stores/slices/user';
import {Notification, notify} from '../../../../utils/notify';
import TextArea from 'antd/es/input/TextArea';

export const Api: FC = () => {
	const user = useAppSelector(selectUser);

	const onClick = () => {
		const key = user.model?.apiKey;
		key && navigator.clipboard.writeText(key);
		notify(Notification.SUCCESS, 'Operation Successful', 'Your API key has been copied to the clipboard!');
	};

	return (
		<Page tab='api'>
			<ApiS>
				<ApiS_Main>
					<ApiS_LeftPart>
						<h1>External API</h1>
						<Space direction="vertical">
							<h2>Access</h2>
							<Typography.Text>
								You can integrate your service with our external API. To do so, you need to use your personal access key when performing
								requests. You can copy it from below.
							</Typography.Text>
							<Row>
								<Input style={{width: 'calc(100% - 40px)'}} value={user.model?.apiKey}/>
								<Tooltip title="copy api key">
									<Button onClick={onClick} icon={<CopyOutlined/>}/>
								</Tooltip>
							</Row>
							<Typography.Text>
								You can reach our API under <b>https://api.transcoder.evemeta.com</b>.
								Example request may look like this:
							</Typography.Text>
							<TextArea spellCheck={false}
								value={`curl -H "ApiKey: ${user.model?.apiKey}" -H "Content-Type: application/json" -X POST https://api.transcoder.evemeta.com/v1/files/list -d \'{"limit": 5}\'`}/>
							<h2>Documentation</h2>
							<Typography.Text>
								Our API is split into four categories. You can see the documentation below. To check details about requests click a link
								to selected API category.
							</Typography.Text>
							<Col>
								<div>
									<Typography.Link href={`${envVars.pageUrl}/api/files.html`} target="_blank">
										Files API &nbsp;
									</Typography.Link>
								</div>
								<div>
									<Typography.Text>
										Responsible for files management. With this you can upload new files or manage existing ones.
									</Typography.Text>
								</div>
							</Col>
							<Col>
								<div>
									<Typography.Link href={`${envVars.pageUrl}/api/jobs.html`} target="_blank">
										Jobs API &nbsp;
									</Typography.Link>
								</div>
								<div>
									<Typography.Text>
										Responsible for jobs management. With this you can schedule new jobs or manage existing ones.
									</Typography.Text>
								</div>
							</Col>
							<Col>
								<div>
									<Typography.Link href={`${envVars.pageUrl}/api/base-presets.html`} target="_blank">
										Base Presets API &nbsp;
									</Typography.Link>
								</div>
								<div>
									<Typography.Text>
										is responsible for fetching predefined presets. With this you can get or list existing base presets.
									</Typography.Text>
								</div>
							</Col>
							<Col>
								<div>
									<Typography.Link href={`${envVars.pageUrl}/api/custom-presets.html`} target="_blank">
										Custom Presets API &nbsp;
									</Typography.Link>
								</div>
								<div>
									<Typography.Text>
										is responsible for custom presets management. With this you create new custom preset based on selected predefined preset
										or manage existing ones.
									</Typography.Text>
								</div>
							</Col>
						</Space>
					</ApiS_LeftPart>
					<ApiS_RightPart image={homeImage}/>
				</ApiS_Main>
			</ApiS>
		</Page>
	);
};
