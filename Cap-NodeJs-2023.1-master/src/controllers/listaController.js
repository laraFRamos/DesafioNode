const knex = require("../database/knex");

module.exports = {
  async addItem(req, res) {
    const { nome, grupo } = req.body;
    try {
      const item = await knex("lista").select("*").where({ nome }).first();

      if (item) {
        return res.json({ message: 'Erro ao adicionar item à lista.' });
      }

      await knex("lista").insert({ nome, grupo });

      return res.json({ message: 'Item adicionado com sucesso.' });
    } catch (error) {
      return res.json(error);
    }
  },

  async removeItem(req, res) {
    const itemId = req.params.id;
    try {
      const item = await knex("lista").select("*").where({ id: itemId }).first();

      if (!item) {
        return res.json({ message: 'Item não encontrado.' });
      }

      await knex("lista").delete().where({ id: itemId });

      return res.json({ message: 'Item removido com sucesso.' });
    } catch (error) {
      return res.json(error);
    }
  },

  async updateItem(req, res) {
    const itemId = req.params.id;
    const itemUpdate = req.body;
    try {
      const item = await knex("lista").select("*").where({ id: itemId }).first();
      if (!item) {
        return res.json({ message: 'Item não encontrado.' });
      }

      await knex("lista").update(itemUpdate).where({ id: itemId });

      return res.json({ message: 'Item atualizado com sucesso.' });
    } catch (error) {
      return res.json(error);
    }
  },

  async getAllItems(req, res) {
    try {
      const lista = await knex('lista').select("id", "nome", "grupo");
      return res.json(lista);
    } catch (error) {
      return res.json(error);
    }
  },

  async getItem(req, res) {
    const itemId = req.params.id;
    try {
      const item = await knex("lista").select("id", "nome", "grupo").where({ id: itemId }).first();
      if (!item) {
        return res.json({ message: 'Item não encontrado.' });
      }
      return res.json(item);
    } catch (error) {
      return res.json(error);
    }
  }
};

