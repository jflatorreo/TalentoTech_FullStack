function checkAccess(attributes) {
    return (req, res, next) => {
        if (attributes.userRole === req.user.role &&
            attributes.resourceType === req.resource.type &&
            attributes.time === 'workingHours') {
            next();
        } else {
            res.status(403).json({ message: 'Acceso denegado' });
        }
    }
}

app.get('/sensitive-doc', checkAccess({
    userRole: 'manager',
    resourceType: 'financial',
    time: 'workingHours'
}), (req, res) => {
    res.json({ message: 'Documento sensible' });
});