import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components";
import { EntryList } from "../components/ui/EntryList";
import { EntryStatusType } from "../interfaces";
import { NewEntry } from "../components/ui/NewEntry";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <NewEntry />
            <EntryList status={EntryStatusType.pending} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Progreso" />
            <EntryList status={EntryStatusType.inProgress} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList status={EntryStatusType.finished} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
