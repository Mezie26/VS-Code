import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('little_lemon');

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.withTransactionSync(
      () => {
        db.runSync(
          'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text);'
        );
      },
      reject,
      resolve
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.withTransactionSync(() => {
      db.execSync('select * from menuitems', [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  db.withTransactionSync(() => {
    db.execSync(
      `insert into menuitems (uuid, title, price, category) values ${menuItems
        .map(
          (item) =>
            `('${item.id}', '${item.title}', '${item.price}', '${item.category}')`
        )
        .join(', ')}`
    );
  });
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    if (!query) {
      db.withTransactionSync(() => {
        db.execSync(
          `select * from menuitems where ${activeCategories
            .map((category) => `category='${category}'`)
            .join(' or ')}`,
          [],
          (_, { rows }) => {
            resolve(rows._array);
          }
        );
      }, reject);
    } else {
      db.withTransactionSync(() => {
        db.execSync(
          `select * from menuitems where (title like '%${query}%') and (${activeCategories
            .map((category) => `category='${category}'`)
            .join(' or ')})`,
          [],
          (_, { rows }) => {
            resolve(rows._array);
          }
        );
      }, reject);
    }
  });
}