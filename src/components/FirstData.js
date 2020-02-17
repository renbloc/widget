import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { VictoryVoronoiContainer, VictoryChart, VictoryTooltip,
    VictoryLine } from 'victory';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MultiTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import WindLogo from './styles/wind.png';
import NuclearLogo from './styles/nuclear.png';
import HydroLogo from './styles/hydro.png';



const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MultiTableCell);


const useStyles = makeStyles(theme => ({
    grid: {
        flexGrow: 1,
    },
    text: {
        textAlign: 'center',
    },
    text_index: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 100,
    },
    text_paragraph: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 100,
    },
    border_right: {
        borderRight: '1px solid',
    },
    container: {
        paddingLeft: 100,
        paddingRight: 100,
    },
    container_chart: {
        paddingLeft: 100,
        paddingRight: 100,
    },
    image_size: {
        width: 50
    }
    }));


const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
    ];
    
export default function FirstData() {
    const classes = useStyles();
    return (
    <div className={classes.grid}>
        <Grid container spacing={8}>
            <Grid className={classes.border_right} item xs={6}>
            <div className={classes.container}>
                <p className={classes.text_index}>80 %</p>

                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{width: '50%'}} align="right">
                                <img className={classes.image_size} src={WindLogo} alt='wind'></img>
                            </TableCell>

                            <TableCell style={{width: '50%'}} align="left">
                                <p className={classes.text_paragraph}>15 %</p>
                            </TableCell>
  
                        </TableRow> 
                        <TableRow>
                            <TableCell style={{width: '50%'}} align="right">
                                <img className={classes.image_size} src={HydroLogo} alt='hydro'></img>
                            </TableCell>
                            <TableCell style={{width: '50%'}} align="left">
                                <p className={classes.text_paragraph}>20 %</p>
                            </TableCell>
                        </TableRow> 
                        <TableRow>
                            <TableCell style={{width: '50%'}} align="right">
                                <img className={classes.image_size} src={NuclearLogo} alt='nuclear'></img>
                            </TableCell>
                            <TableCell style={{width: '50%'}} align="left">
                                <p className={classes.text_paragraph}>90 %</p>
                            </TableCell>
                        </TableRow> 
                    </TableBody>
                </Table>
            </div>

                


            </Grid>
            <Grid className={classes.table} item xs={6}>
                <div className={classes.container_chart}>
                    <VictoryChart height={400} width={400}
                        domainPadding={{ y: 10 }}
                        containerComponent={
                        <VictoryVoronoiContainer
                            voronoiDimension="x"
                            labels={({ datum }) => `y: ${datum.y}`}
                            labelComponent={
                            <VictoryTooltip
                                cornerRadius={0}
                                flyoutStyle={{ fill: "white" }}
                            />}
                        />}
                    >
                        <VictoryLine
                        data={[
                            { x: 1, y: 5, l: "one" },
                            { x: 1.5, y: 5, l: "one point five" },
                            { x: 2, y: 4, l: "two" },
                            { x: 3, y: -2, l: "three" }
                        ]}
                        style={{
                            data: {
                            stroke: "tomato",
                            strokeWidth: ({ active }) => active ? 4 : 2
                            },
                            labels: { fill: "tomato" }
                        }}
                        />

                        <VictoryLine
                        data={[
                            { x: 1, y: -3, l: "red" },
                            { x: 2, y: 5, l: "green" },
                            { x: 3, y: 3, l: "blue" }
                        ]}
                        style={{
                            data: {
                            stroke: "blue",
                            strokeWidth: ({ active }) => active ? 4 : 2
                            },
                            labels: { fill: "blue" }
                        }}
                        />

                        <VictoryLine
                        data={[
                            { x: 1, y: 5, l: "cat" },
                            { x: 2, y: -4, l: "dog" },
                            { x: 3, y: -2, l: "bird" }
                        ]}
                        style={{
                            data: {
                            stroke: "black",
                            strokeWidth: ({ active }) => active ? 4 : 2
                            },
                            labels: { fill: "black" }
                        }}
                        />
                    </VictoryChart>

                </div>
            </Grid>
        </Grid>
    </div>
    );
}