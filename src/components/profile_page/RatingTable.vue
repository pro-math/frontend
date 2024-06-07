<script setup>
//Таблица рейтинга

// import DataTable from 'datatables.net-vue3'
// import DataTablesCore from 'datatables.net'
// import 'datatables.net-responsive'
// import 'datatables.net-select'

// DataTable.use(DataTablesCore)

const data = [
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12],
  [9, 10, 11, 12]
]

// const options = {
//   language: {
//     url: '/russian.json'
//   },
//   autoWidth: false,
//   responsive: true,
//   search: false
// }
</script>

<template>
  <section>
    <div class="w-full my-6">
      <div
        id="recipients"
        class="w-full mt-6 lg:mt-0 rounded shadow bg-neutral text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs"
      >
        <table
          class="table display stripe responsive hover py-4 w-full table-pin-rows table-pin-cols"
        >
          <thead>
            <tr>
              <th class="text-primary text-sm">Процент правильно решенных</th>
              <th class="text-primary text-sm">Количество правильно решенных</th>
              <th class="text-primary text-sm">Затраченное время</th>
              <th class="text-primary text-sm">Операция</th>
              <!-- <th data-priority="5" class="text-primary text-sm"></th> -->
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="text-sm" >{{ row[0] }}</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <!-- <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr>
            <tr>
              <td class="text-sm">Процент правильно решенных</td>
              <td class="text-sm">Количество правильно решенных</td>
              <td class="text-sm">Затраченное время</td>
              <td class="text-sm">Операция</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
