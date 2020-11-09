<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
        <!-- 검색영역 시작-->
        <div class="widget has-shadow">
          <div class="widget-body">
            <table class="table table-bordered" summary="코드 검색하기">
              <colgroup>
                <col width="10%" />
                <col width="40%" />
                <col width="10%" />
                <col width="40%" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    <span class="text-primary">코드그룹 선택</span>
                  </th>
                  <td>
                    <div class="row">
                      <div class="col col-sm-4">
                        <select class="form-control">
                          <option>[101]품목 대분류</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <th><span class="text-primary">코드 명</span></th>
                  <td>
                    <div class="row">
                      <div class="col col-sm-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="검색어 입력"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="text-center">
              <button class="btn btn-primary">검색</button>
            </div>
          </div>
        </div>
        <!-- 검색영역 끝-->

        <!-- 리스트영역 시작 -->
        <div class="widget has-shadow">
          <div class="widget-header bordered">
            <div class="row">
              <div
                class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center"
              >
                <select class="form-control col-sm-2">
                  <option>표시갯수</option>
                  <option>10개</option>
                  <option>20개</option>
                  <option>30개</option>
                </select>
                <label class="col-sm-4">조회건수 : 20개</label>
              </div>
            </div>
          </div>
          <div class="widget-body">
            <table
              id="code_list-table"
              class="table table-bordered"
              summary="코드관리 리스트"
            >
              <colgroup>
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="*" />
                <col width="5%" />
                <col width="7%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th>코드그룹</th>
                  <th>상위 참조코드</th>
                  <th>코드</th>
                  <th>코드명</th>
                  <th>순서</th>
                  <th>사용여부</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr>
                                    <td colspan="7" class="text-center">조회할 "코드그룹"을 먼저 선택하고 조회하세요</td>
                                </tr> -->
                <tr>
                  <td>품목 대분류</td>
                  <td>-</td>
                  <td>101000001</td>
                  <td>품목 대분류명 1</td>
                  <td class="text-center">1</td>
                  <td class="text-center">O</td>

                  <td>
                    <div
                      class="col-sm-12 d-flex align-items-center justify-content-md-end justify-content-center"
                    >
                      <button class="btn btn-sm btn-outline-dark">수정</button>
                      <button class="btn btn-sm btn-danger">삭제</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 리스트영역 끝 -->
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader";
import axios from "axios";
// import { getSideMenuList } from "@/api";

export default {
  name: "baseShopList",
  components: {
    PageHeader
  },
  data: function() {
    return {
      pageCurrentInfo: {
        title: "코드 관리",
        groupName: "기초관리"
      }
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:8443/basic/code/find?cgCode=201&cdName=1"
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>