/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
  // Firebase doesn't require predefined models.
  // Use Firestore directly in controllers or create helper functions here.
  // Collection name: "categorymodel"

 import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Category = sequelize.define("Category", {
  category_name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true},
  status: {type: DataTypes.STRING, allowNull: false, defaultValue: "Active"},
  created_at: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
  updated_at: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
});

// INSERT
export const insert = async (data) => {
  return await Category.create(data);
};

// SELECT ALL
export const selectAll = async () => {
  return await Category.findAll();
};

// SELECT BY ID
export const selectById = async (id) => {
  return await Category.findByPk(id);
};