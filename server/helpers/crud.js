function crudRoutes(model) {
    return {
        create: createRoute(model),
        read: readRoute(model),
        update: updateRoute(model),
        delete: deleteRoute(model),
        list: listRoute(model)
    }
}

function createRoute(model) {
    return function(req, res) {
        var newEntity = new model();
        for (key in req.body) {
            newEntity[key] = req.body[key];
        }

        newEntity.save(function(err) {
            if (err) {
                throw err;
            } else {
                res.json({ message: model.modelName + ' created successfully.' });
            }
        });
    }
}

function readRoute(model) {
    return function(req, res) {
        model.findById(req.params.id, function(err, entity) {
            if (err) {
                throw err;
            } else {
                if (entity) {
                    res.json(entity);
                } else {
                    throw new Error(model.modelName + ' not found.');
                }
            }
        });
    }
}

function updateRoute(model) {
    return function(req, res) {
        model.findByIdAndUpdate(req.params.id, req.body, function(err, entity) {
            if (err) {
                throw err;
            } else {
                if (entity) {
                    res.json({ message: model.modelName + ' updated successfully.' });
                } else {
                    throw new Error(model.modelName + ' not found.');
                }
            }
        });
    }
}

function deleteRoute(model) {
    return function(req, res) {
        model.findByIdAndRemove(req.params.id, function(err, entity) {
            if (err) {
                throw err;
            } else if (entity) {
                res.json({ message: model.modelName + ' deleted successfully.' });
            } else {
                throw new Error(model.modelName + ' not found.');
            }
        });
    }
}

function listRoute(model) {
    return function(req, res) {
        model.find({}, function(err, entities) {
            if (err) {
                throw err;
            } else {
                res.json(entities);
            }
        });
    }
}

module.exports = crudRoutes;
