import { NextPage } from "next";

import { Layout } from "@/components/layouts";
import { Card, CardHeader, Grid } from "@mui/material";
import { EntryList, NewEntry } from "@/components/ui";

const HomePage: NextPage = () => {
export const dynamic = "force-dynamic"
  
  return (
    <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Waiting" />

            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In progress" />
            <EntryList status="in-progress"></EntryList>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Finished" />
            <EntryList status="finished"></EntryList>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
