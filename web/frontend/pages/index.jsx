import {
  Card, 
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Heading,
  Divider,
  Grid,
  Select,
  Button,
} from "@shopify/polaris";

import { useState, useCallback, useEffect } from "react";

import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export default function HomePage() {
  const fetch = useAuthenticatedFetch();
  const [selected, setSelected] = useState("today");
  const [url, setUrl] = useState("");

  const handleSelectChange = useCallback((value) => setSelected(value), []);
    useEffect(() => {
      handleLink();
      handleTag();
    }, []);

const handleLink = async () => {
  const response = await fetch("/api/getUrl");
  const content = await response.text();
  console.log("response", content);
  setUrl(content);
  };

  const handleTag = async () => {
    const response = await fetch("/api/checkTag");
    const content = await response.text();
    // console.log("response", content);
    // setUrl(content);
    };
 
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  return (
    <Page>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Text variant="heading3xl" as="h3" fontWeight="semibold">
            Thank you pages
          </Text>

          <div style={{ padding: "2rem 0" }}>
            <Divider borderStyle="base" />
          </div>

          <Stack wrap={false} distribution="fillEvenly" alignment="center">
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <div style={{ padding: "10px 0" }}>
                  <Text variant="headingMd" as="h6">
                    Default thank you page
                  </Text>
                  <p>
                    This is the thank you page template your customers see when
                    they complete a purchase, and none of the triggers are being
                    met
                  </p>
                </div>
              </Grid.Cell>

              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 8 }}>
                <Card title="" sectioned>
                  <Grid>
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 6 }}
                    >
                      <Text variant="headingMd" as="h6">
                        Select default thank you page
                      </Text>
                      <p>Last saved on Wednesday at 08:59am</p>
                    </Grid.Cell>

                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 4, md: 4, lg: 8, xl: 6 }}
                    >
                      {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}

                      <Stack
                        wrap={false}
                        distribution="fillEvenly"
                        alignment="center"
                      >
                        <Select
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                        />
                        {/* <Button
                          primary
                          onClick={(e) => {
                            window.open("https://thankyou.ngrok.io/", "_blank");
                          }}
                        >
                          Customize
                        </Button> */}
                        <Button primary external={true} url={url}>
                          Customize
                        </Button>
                      </Stack>

                      {/* </div> */}
                    </Grid.Cell>
                  </Grid>

                  <div
                    style={{
                      marginTop: "5rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={trophyImage}
                      alt="Nice work on building a Shopify app"
                      width={200}
                    />
                  </div>
                </Card>
              </Grid.Cell>
            </Grid>
          </Stack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
