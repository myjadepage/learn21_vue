<template>
  <div class="default-sidebar">
    <nav
      class="side-navbar box-scroll sidebar-scroll"
      :class="{ shrinked: isShrinked }"
    >
      <ul class="list-unstyled" id="pageMove">
        <li>
          <a href="#dropdown-base" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-leaf"></i><span>기초 관리</span></a
          >
          <ul id="dropdown-base" class="collapse list-unstyled">
            <li><router-link to="/base/shop_list">가맹점 관리</router-link></li>
            <li>
              <router-link to="/base/vendor_list">거래처 관리</router-link>
            </li>
            <li><router-link to="/base/items">품목 관리</router-link></li>
            <li><router-link to="/base/code">코드 관리</router-link></li>
            <li>
              <router-link to="/base/code_detail">코드 상세 관리</router-link>
            </li>
            <li>
              <router-link to="/base/code_group">코드 그룹 관리</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-buy" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-shopping-cart"></i><span>구매 관리</span></a
          >
          <ul id="dropdown-buy" class="collapse list-unstyled">
            <li><router-link to="/buy">구매 발주서</router-link></li>
            <li><router-link to="/buy/confirm">매입 확정</router-link></li>
            <li><router-link to="/buy/spec_list">매입 명세서</router-link></li>
            <li><router-link to="/buy/search">매입 조회</router-link></li>
            <li><router-link to="/buy/invoice">매입처 원장</router-link></li>
            <li><router-link to="/buy/not_in">미입고 현황</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-sales" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-calculator"></i><span>영업 관리</span></a
          >
          <ul id="dropdown-sales" class="collapse list-unstyled">
            <li><router to="sales_spec_list">매출 명세서</router></li>
            <li><router to="sales_settle">매출 정산</router></li>
            <li><router to="sales_search">매출 조회</router></li>
            <li><router to="sales_invoice">매출처 원장</router></li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-order" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-bus"></i><span>주문/배송 관리</span></a
          >
          <ul id="dropdown-order" class="collapse list-unstyled">
            <li><router to="order_list">주문서 조회</router></li>
            <li><router to="order_cancle_list">주문취소/반품 조회</router></li>
            <li><router to="order_refund_list">환불 관리</router></li>
            <li>
              <router to="order_delivery_back_list">반품연동 조회</router>
            </li>
            <li><router to="order_num_send">에스크로 송장번호 전송</router></li>
            <li>
              <router to="order_num_send_list"
                >에스크로 송장번호 전송 내역조회</router
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-stock" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-cubes"></i><span>물류관리</span></a
          >
          <ul id="dropdown-stock" class="collapse list-unstyled">
            <li><router to="stock_basic">재고 현황</router></li>
            <li><router to="stock_items">품목별 상세 재고</router></li>
            <li><router to="stock_manage">재고자산 조정 관리</router></li>
            <li><router to="stock_invoice">송장 관리</router></li>
            <li><router to="stock_delivery">택배출고 현황</router></li>
            <li><router to="stock_return">반품 관리</router></li>
            <li><router to="stock_return_status">반품 처리 현황</router></li>
            <li><router to="stock_shop">가맹점 물류이동</router></li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-goods" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-book"></i><span>상품관리</span></a
          >
          <ul id="dropdown-goods" class="collapse list-unstyled">
            <li><router to="goods_classify">상품 분류 관리</router></li>
            <li><router to="goods_manage_info">상품 정보 관리</router></li>
            <li><router to="goods_update_info">상품 정보 일괄 변경</router></li>
          </ul>
        </li>
        <li>
          <a href="#dropdown-cs" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-edit"></i><span>상담관리</span></a
          >
          <ul id="dropdown-cs" class="collapse list-unstyled">
            <li><rourter to="cs_qa">1:1 상담 관리</rourter></li>
            <li><rourter to="cs_manage">고객상담 관리</rourter></li>
            <li><rourter to="cs_sms_manage">SMS 관리</rourter></li>
            <li><rourter to="cs-sms_list">SMS 발송 결과</rourter></li>
            <li><rourter to="cs_category">상담유형 등록</rourter></li>
            <li><rourter to="cs-category_manage">상담유형 관리</rourter></li>
          </ul>
        </li>
        <li>
          <a
            href="#dropdown-manage"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-file-text"></i><span>운영 관리</span></a
          >
          <ul id="dropdown-manage" class="collapse list-unstyled">
            <li><router to="manage_notice_list">공지사항 관리</router></li>
            <li><router to="manage_faq_list">FAQ 관리</router></li>
          </ul>
        </li>
        <li>
          <a
            href="#dropdown-member"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-users"></i><span>직원 관리</span></a
          >
          <ul id="dropdown-member" class="collapse list-unstyled">
            <li><router to="member_manage">직원 관리</router></li>
          </ul>
        </li>
        <li>
          <a
            href="#dropdown-statistics"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-signal"></i><span>통계</span></a
          >
          <ul id="dropdown-statistics" class="collapse list-unstyled">
            <li><router to="statistics_member">회원 분포</router></li>
            <li>
              <router to="statistics_member_new">회원가입/탈퇴 현황</router>
            </li>
            <li><router to="statistics_sales">판매 실적 조회</router></li>
            <li>
              <router to="statistics_online">온라인 구매비율 분석</router>
            </li>
            <li><router to="statistics_topseller">상위 구매자 현황</router></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  name: "SideBar",
  data: function() {
    return {};
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.makeScroll();
    this.makeCollapse();
  },
  computed: {
    isShrinked() {
      return this.$store.state.isSideOpen;
    }
  },
  methods: {
    // 대메뉴 api
    getMenuList() {
      axios({
        method: "get",
        url: "http://localhost:8443/basic/menu/find"
      })
        .then(function(res) {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //scroll
    makeScroll() {
      $(".sidebar-scroll").niceScroll({
        cursorcolor: "transparent",
        cursorborder: "transparent",
        cursoropacitymax: 0,
        boxzoom: false,
        autohidemode: "hidden",
        cursorfixedheight: 80
      });
    },
    //collapse
    makeCollapse() {
      $(function() {
        $(".side-navbar li a").click(function() {
          $(".collapse").collapse("hide");
        });
      });
    }
  }
};
</script>
