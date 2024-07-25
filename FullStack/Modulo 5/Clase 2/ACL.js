const acl = {
    'document1': {
        'user1': ['read', 'write'],
        'user2': ['read']
    }
};

function checkACL(resource, permission) {
    return (req, res, next) => {
        if (acl[resource][req.user.id].includes(permission)) {
            next();
        } else {
            res.status(403).json({ message: 'Acceso denegado' });
        }
    }
}

app.get('/document1', checkACL('document1', 'read'), (req, res) => {
    res.json({ message: 'Contenido del documento 1' });
});