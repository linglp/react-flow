import { Node, Edge, XYPosition } from 'react-flow-renderer';

const position: XYPosition = { x: 0, y: 0 };

const nodes: Node[] = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Demographics' },
        position: { x: 10, y: 48 },
    },
    {
        id: '2',
        data: { label: 'FamilyHistory' },
        position: { x: 10, y: 70 },
    },
    {
        id: '3',
        data: { label: 'Exposure' },
        position: { x: 10, y: 92 },
    },
    {
        id: '4',
        data: { label: 'FollowUp' },
        position: { x: 10, y: 92 },
    },
    {
        id: '5',
        data: { label: 'Diagnosis' },
        position: { x: 10, y: 136 },
    },
    {
        id: '6',
        data: { label: 'Therapy' },
        position: { x: 10, y: 158 },
    },
    {
        id: '7',
        data: { label: 'MolecularTest' },
        position: { x: 10, y: 180 },
    },
    {
        id: '8',
        data: { label: 'Patient' },
        position: { x: 169, y: 228 },
    },
    {
        id: '9',
        data: { label: 'Biospecimen' },
        position: { x: 328, y: 276 },
    },
    {
        id: '10',
        data: { label: 'ClinicalDataTier2' },
        position: { x: 328, y: 300 },
    },
    {
        id: '11',
        data: { label: 'ScRNA-seqLevel1' },
        position: { x: 501, y: 524 },
    },
    {
        id: '12',
        data: { label: 'ImagingLevel2Channels' },
        position: { x: 328, y: 586 },
    },
    {
        id: '13',
        data: { label: 'ImagingLevel2' },
        position: { x: 501, y: 634 },
    },
    {
        id: '14',
        data: { label: 'ScRNA-seqLevel2' },
        position: { x: 688, y: 572 },
    },
    {
        id: '15',
        data: { label: 'ScRNA-seqLevel3' },
        position: { x: 875, y: 620 },
    },
    {
        id: '16',
        data: { label: 'ScRNA-seqLevel4' },
        position: { x: 1034, y: 688 },
    },
    {
        id: '17',
        data: { label: 'SRRSClinicalDataTier2' },
        position: { x: 328, y: 322 },

    },
    {
        id: '18',
        data: { label: 'BulkRNA-seqLevel1' },
        position: { x: 501, y: 546 },

    }
    //   { id: '7', type: 'output', data: { label: 'output' }, position: { x: 400, y: 450 } },
];

const edges: Edge[] = [
    { id: 'e12', source: '1', target: '8', type: 'smoothstep' },
    { id: 'e13', source: '2', target: '8', type: 'smoothstep' },
    { id: 'e14', source: '3', target: '8', type: 'smoothstep' },
    { id: 'e15', source: '4', target: '8', type: 'smoothstep' },
    { id: 'e16', source: '5', target: '8', type: 'smoothstep' },
    { id: 'e17', source: '6', target: '8', type: 'smoothstep' },
    { id: 'e18', source: '7', target: '8', type: 'smoothstep' },
    { id: 'e19', source: '8', target: '9', type: 'smoothstep' },
    { id: 'e19', source: '8', target: '10', type: 'smoothstep' },
    { id: 'e20', source: '9', target: '11', type: 'smoothstep' },
    { id: 'e21', source: '12', target: '13', type: 'smoothstep' },
    { id: 'e21', source: '9', target: '13', type: 'smoothstep' },
    { id: 'e22', source: '14', target: '15', type: 'smoothstep' },
    { id: 'e24', source: '15', target: '16', type: 'smoothstep' },
    { id: 'e25', source: '11', target: '14', type: 'smoothstep' },
    { id: 'e26', source: '8', target: '17', type: 'smoothstep' },
    { id: 'e27', source: '9', target: '18', type: 'smoothstep' }
];

const nodesAndEdges = { nodes, edges };

export default nodesAndEdges;
