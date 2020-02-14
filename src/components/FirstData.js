import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme } from 'victory';



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
        fontSize: 25,
        fontWeight: 100,
    },
    border_right: {
        borderRight: '1px solid',
    },
    container: {
        paddingLeft: 100,
        paddingRight: 100,
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
                <p className={classes.text_paragraph}>Vi är Renbloc, ett företag som kan ge dig och dina kunder ett försrpång inför den oundvikliga energiomvandlingen. Ge oss en chans! Om inte för vår underbara tech så gör det för våra fina anställda.</p>
            </div>

                


            </Grid>
            <Grid className={classes.table} item xs={6}>
                <div className={classes.container}>

                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                    >
                    <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                    />
                    </VictoryChart>

                </div>
            </Grid>
        </Grid>
    </div>
    );
}