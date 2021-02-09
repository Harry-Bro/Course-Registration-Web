<%@ page language="java" contentType="text/html; charset-UTF-8" pageEncoding="utf-8" %>

<%@ include file="layout/header.jsp" %>

<main class="my-5">
    <div class="row form-group">
        <div class="col-md-6 offset-md-3 ">
            <div class="card">
                <div class="card-header">회원가입</div>
                <div class="card-body">
                    <form>
                        <input type="text" name="username" id="username" class="form-control mb-2" placeholder="name" required>
                        <input type="password" name="password" id="password" class="form-control mb-3" placeholder="password" required>
                        <button type="button" id="btn-create-account" class="btn btn-primary btn-block">회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<script src="/assets/js/account.js"></script>
<%@ include file="layout/footer.jsp"%>
