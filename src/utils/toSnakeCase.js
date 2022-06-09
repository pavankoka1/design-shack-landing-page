function toSnakeCase(obj) {
    if (typeof obj != 'object') return obj;

    for (var oldName in obj) {
        // Camel to underscore
        const newName = oldName.replace(/([A-Z])/g, function ($1) {
            return '_' + $1.toLowerCase();
        });

        // Only process if names are different
        if (newName !== oldName) {
            // Check for the old property name to avoid a ReferenceError in strict mode.
            if (obj.hasOwnProperty(oldName)) {
                obj[newName] = obj[oldName];
                delete obj[oldName];
            }
        }

        // Recursion
        if (typeof obj[newName] == 'object') {
            obj[newName] = toSnakeCase(obj[newName]);
        }
    }
    return obj;
}

export default toSnakeCase;
