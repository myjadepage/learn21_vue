<template>
  <div class="page-header">
    <div class="d-flex align-items-center">
      <h2 class="page-header-title">{{ pageCurrentInfo.title }}</h2>
      <div>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/"><i class="la la-home"></i></a>
          </li>
          <li class="breadcrumb-item">{{ pageCurrentInfo.groupName }}</li>
          <li class="breadcrumb-item active">{{ pageCurrentInfo.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  props: ["pageCurrentInfo"]
};
</script>
