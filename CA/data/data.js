let dataImport=[]
let table;

function preload(){
    table= loadTable('data/data.csv', 'csv', 'header');
}

function generateData(){
    for(let r= 0; r< table.getRowCount(); r++){
        dataImport.push(table.rows[r].obj)
    }

    for(let i= 0; i< data.length; i++){
        dataImport[i].Value= int(dataImport[i].Value)
    }
}