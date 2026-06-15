db.sample.drop()
db.sample.createIndex({employeeId: 'hashed'});
sh.shardCollection('gwfinn_db_local.sample', {employeeId: 'hashed'})

function getDocument(id) {
    const document = {};

    document["employeeId"] = id;
    document["name"] = "Sameer" + id;
    return document;
}

for (let i=1; i<=1; i++) {
    for (let j = 1; j<=50; j++) {
        const document = getDocument(i);
        db.sample.insertOne(document);
    }
}