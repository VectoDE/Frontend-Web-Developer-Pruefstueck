module.exports = {
    roles: {
        ADMIN: 'admin',
        USER: 'user',
        MODERATOR: 'moderator',
        // Fügen Sie hier weitere Rollen hinzu, wenn erforderlich
    },
    permissions: {
        admin: {
            can: [
                'create_user',
                'edit_user',
                'delete_user',
                'view_users',
                'create_role',
                'edit_role',
                'delete_role',
                'view_roles',
                // Fügen Sie hier weitere Berechtigungen für Admin hinzu
            ]
        },
        user: {
            can: [
                'view_profile',
                'edit_profile',
                // Fügen Sie hier weitere Berechtigungen für User hinzu
            ]
        },
        moderator: {
            can: [
                'view_users',
                'edit_user',
                // Fügen Sie hier weitere Berechtigungen für Moderator hinzu
            ]
        }
    }
};
