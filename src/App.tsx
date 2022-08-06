import * as React from "react"
import {Box, ChakraProvider, Grid, theme,} from "@chakra-ui/react"
import DataTable from "./components/DataTable/DataTable";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <div><h2>Hello</h2></div>
                <DataTable/>
            </Grid>
        </Box>
    </ChakraProvider>
)
