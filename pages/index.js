import { Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title='Product Selector'
    primaryAction={{
      content: 'Select Products',
      onAction: () => console.log('been a while')
    }}
    
  />
);

export default Index;
