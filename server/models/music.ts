import db from '../database/db';

const Music = {
    getAll: (artist_name: any) => {
        const query = 'SELECT * FROM MUSIC WHERE artist_name ILIKE $1';

        return db.query(query, [`%${artist_name}%`]).then((response: any) => {
            return response.rows;
        });
    },

    getById: (id: any) => {
        const query = `SELECT * FROM MUSIC WHERE id = $1`;
        return db.query(query, [id]).then((response: any) => {
            return response.rows ? response.rows[0] : {};
        });
    },

    // new querry to check
    getByArtistName: (artist_name: any) => {
        const query = `SELECT * FROM MUSIC WHERE artist_name = $1`;
        return db.query(query, [artist_name]).then((response: any) => {
            return response.rows ? response.rows: {};
        });
    },

    // new querry to check
    getByStyle: (style: any) => {
        const query = `SELECT * FROM MUSIC WHERE style = $1`;
        return db.query(query, [style]).then((response: any) => {
            return response.rows ? response.rows: {};
        });
    },


        create: ({
        artist_name,
        style,
        miscellaneous = null,
    }) => {
        const query = `
        INSERT INTO music (
            artist_name,
            style,
            miscellaneous
            ) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
        return db
            .query(query, [
                artist_name,
                style,
                miscellaneous,
            ])
            .then((response: any) => {
                return response.rows ? response.rows[0] : {};
            });
    },
    delete: (id: any) => {
        const query = `DELETE FROM music WHERE id = $1`;
        return db.query(query, [id]);
    },
};

export default Music;