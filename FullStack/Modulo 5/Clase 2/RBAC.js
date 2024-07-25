function checkRole(role) {
    return (req, res, next) => {
        if (req.user.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'Acceso denegado' });
        }
    }
}

app.get('/admin-only', checkRole('admin'), (req, res) => {
    res.json({ message: 'Bienvenido, admin' });
});