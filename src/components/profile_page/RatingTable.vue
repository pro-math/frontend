<script setup>

//Таблица рейтинга

</script>

<template>
  <section>
                <div class=" w-full my-6">
                    <div id='recipients'
                        class="w-full p-4 mt-6 lg:mt-0 rounded shadow bg-neutral text-neutral-content border border-primary">


                        <table id="resultTable" class="stripe responsive hover py-4 w-full">
                            <thead>
                                <tr>
                                    <th data-priority="1" class="text-primary text-sm">Процент правильно решенных</th>
                                    <th data-priority="2" class="text-primary text-sm">Количество правильно решенных
                                    </th>
                                    <th data-priority="3" class="text-primary text-sm">Затраченное время</th>
                                    <th data-priority="4" class="text-primary text-sm">Операция</th>
                                    <!-- <th data-priority="5" class="text-primary text-sm"></th> -->
                                </tr>
                            </thead>
                            <tbody class="h-96">
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
</template>
