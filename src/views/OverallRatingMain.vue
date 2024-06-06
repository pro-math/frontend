<script setup></script>

<template>
  <main>
    <div class="flex container items-center justify-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <section class="">
        <div>
          <p class="text-3xl pr-6 text-center text-base-content my-3">ОБЩИЙ РЕЙТИНГ</p>
        </div>
        <div class="test-config flex justify-center">
          <div
            class="container flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-y-4 xl:flex-row xl:justify-center"
          >
            <div class="join w-full md:w-1/3">
              <input
                class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
                type="checkbox"
                name=""
                aria-label="операции"
                disabled
              />
              <div class="join w-full">
                <input 
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="checkbox"
                  name="operations"
                  value="+"
                  aria-label="+"
                  checked="checked"
                />
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="checkbox"
                  name="operations"
                  value="-"
                  aria-label="-"
                />
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="checkbox"
                  name="operations"
                  value="//"
                  aria-label="//"
                />
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="checkbox"
                  name="operations"
                  value="*"
                  aria-label="*"
                />
              </div>
            </div>
            <div class="join w-full md:w-1/3 md:ml-5xs">
              <input
                class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
                type="radio"
                name=""
                aria-label="сложность"
                disabled
              />
              <div class="join w-full">
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="radio"
                  name="levels"
                  value="10"
                  aria-label="10"
                  checked="checked"
                />
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="radio"
                  name="levels"
                  value="100"
                  aria-label="100"
                />
                <input
                  class="join-item btn btn-sm bg-primary/20 flex-grow"
                  type="radio"
                  name="levels"
                  value="1000"
                  aria-label="1000"
                />
              </div>
            </div>
            <div class="join w-full md:w-1/3">
              <input
                class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
                type="radio"
                name=""
                aria-label="тип"
                disabled
              />
              <div class="join w-full">
                <input
                  class="join-item btn btn-sm bg-primary/10 flex-grow"
                  type="radio"
                  name="options"
                  value="time"
                  aria-label="на время"
                />
                <input
                  class="join-item btn btn-sm bg-primary/10 flex-grow"
                  type="radio"
                  name="options"
                  value="count"
                  aria-label="на количество"
                  checked="checked"
                />
              </div>
            </div>
            <div class="w-full md:w-1/3 md:ml-5xs">
              <div class="join hidden w-full">
                <input
                  class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
                  type="radio"
                  name="options"
                  aria-label="время"
                  disabled
                />
                <div class="join w-full">
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="time"
                    value="15s"
                    aria-label="15"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="time"
                    value="30s"
                    aria-label="30"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="time"
                    value="60s"
                    aria-label="60"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="time"
                    value="90s"
                    aria-label="90"
                  />
                </div>
              </div>
              <div class="join w-full">
                <input
                  class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
                  type="radio"
                  name="options"
                  aria-label="количество"
                  disabled
                />
                <div class="join w-full">
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="count"
                    value="10"
                    aria-label="10"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="count"
                    value="15"
                    aria-label="15"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    type="radio"
                    name="count"
                    value="20"
                    aria-label="20"
                  />
                  <input
                    class="join-item btn btn-sm bg-primary/10 flex-grow"
                    checked="checked"
                    type="radio"
                    name="count"
                    value="30"
                    aria-label="30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="w-full my-6">
          <div
            id="recipients"
            class="w-full p-4 mt-6 lg:mt-0 rounded shadow bg-neutral text-neutral-content border border-primary"
          >
            <table id="owerallTable" class="stripe hover py-4 w-full">
              <thead>
                <tr>
                  <th data-priority="1" class="text-primary text-sm">Никнейм</th>

                  <th data-priority="1" class="text-primary text-sm">Процент правильно решенных</th>

                  <th data-priority="2" class="text-primary text-sm">
                    Количество правильно решенных
                  </th>
                  <th data-priority="3" class="text-primary text-sm">Затраченное время</th>
                  <th data-priority="4" class="text-primary text-sm">Операция</th>
                  <!-- <th data-priority="5" class="text-primary text-sm"></th> -->
                </tr>
              </thead>
              <tbody class="h-96"></tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
