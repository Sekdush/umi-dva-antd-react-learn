import DocumentTitle from 'react-document-title'; // 能动态修改页面title的
import Header from './header';
import Content from './content';

import { Layout } from 'antd';

function BasicLayout(props) {
  const pageTitle = () => {
    return '学习-Umi Pro';
  };
  const { children } = props;
  return (
    <>
      <DocumentTitle title={pageTitle()} />
      <Layout style={{ height: '100%' }}>
        <Header />
        <Content children={children} />
      </Layout>
    </>
  );
}
export default BasicLayout;
