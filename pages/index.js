import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

class Index extends React.Component {
  state = { open: false };
  render() {
    return(
        <Page
          title='Product Selector'
          primaryAction={{
            content: 'Select Products',
            onAction: () => this.setState({open: true})
          }}
        >
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
        />
        </Page>
    )
  }
}

export default Index;
