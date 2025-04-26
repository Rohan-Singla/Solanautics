import { NextResponse } from 'next/server'
import { DuneClient, QueryParameter } from '@duneanalytics/client-sdk'

const dune = new DuneClient(process.env.DUNE_API_KEY || 'mnj57v5qHcjDN556lFpO653d6T1UZb07')

export async function GET() {
    try {
        const parameters = {
            query_parameters: [
                QueryParameter.text('TextField', 'Plain Text'),
            ],
        }
        const queryID = 3917753;
        const executionResult = await dune.runQuery(queryID);
        const rows = executionResult.result?.rows || []
        const data = await dune.getLatestResult({ queryId: 3917753 })
        return NextResponse.json(rows)
        // return NextResponse.json(data?.result?.rows)
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
    }
}
