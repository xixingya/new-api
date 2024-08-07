import React from 'react';
import TokensTable from '../../components/TokensTable';
import { Banner, Layout } from '@douyinfe/semi-ui';
const Token = () => (
  <>
    <Layout>
      <Layout.Header>
        <Banner
          type='warning'
          description='将 OpenAI API 基础地址 https://api.openai.com 替换为 https://opus.vmuu.link ，复制下面的密钥或点击聊天即可使用'
        />
      </Layout.Header>
      <Layout.Content>
        <TokensTable />
      </Layout.Content>
    </Layout>
  </>
);

export default Token;
