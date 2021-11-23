module.exports = {
    sortByKey: function(array, key, reverse = false)
    {
        array.sort((a, b) =>
        {
            let x = a[key], y = b[key];
            if (reverse)
            {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            else
            {
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            }
        });
    }
}