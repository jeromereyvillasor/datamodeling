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
import { insert, selectAll, selectById } from "../models/Salemodel.js";

const salecontroller = {

  insert: async (req, res) => {
    try {
      const sale = await insert(req.body);

      res.status(201).json({
        message: "Sale inserted successfully",
        data: sale
      });

    } catch (error) {
      res.status(500).json({
        message: "Failed to insert sale",
        error: error.message
      });
    }
  },

  selectAll: async (req, res) => {
    try {
      const sales = await selectAll();

      res.status(200).json({
        message: "Sales retrieved successfully",
        data: sales
      });

    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve sales",
        error: error.message
      });
    }
  },

  selectById: async (req, res) => {
    try {
      const sale = await selectById(req.params.id);

      if (!sale) {
        return res.status(404).json({
          message: "Sale not found"
        });
      }

      res.status(200).json({
        message: "Sale retrieved successfully",
        data: sale
      });

    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve sale",
        error: error.message
      });
    }
  }

};

export { salecontroller };