import { request } from '../utils/axios';

export const getAdminDashboardData = async () => {
    try {
        const response = await request.get("v1/user/dash");
        return response.data;
    } catch (err) {
        console.log(err?.response?.data?.message);
        throw err;
    }
};

export const getStakeHolders = async (values) => {
  try {
    console.log(values);
    const response = await request.post('allStakeHolders', values);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getUserList = async (userType) => {
  try {
    console.log(userType);
    const response = await request.post(`v1/user/analytics?type=${userType}`);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getOrCreateProfile = async (values) => {
    try {
        const response = await request.post(`v1/profile/admin`, values);
        return response.data;
    } catch (err) {
        console.log(err?.response?.data?.message);
        throw err;
    }
};

export const applicationManagement = async (values) => {
  try {
    const response = await request.post('manageApplications', values);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const addMentor = async (values) => {
  try {
    const response = await request.post('addMentors', values);
    return response.data;
  } catch (err) {
    console.log('serdsd', err?.response?.data?.message);
    throw err;
  }
};

export const getInvestorCommitment = async (values) => {
  try {
    const response = await request.post('getInvestorCommitment', values);
    return response.data;
  } catch (err) {
    console.log('serdsd', err?.response?.data?.message);
    throw err;
  }
};

export const manageCommitment = async (values) => {
  try {
    const response = await request.post('manageCommitment', values);
    return response.data;
  } catch (err) {
    console.log('serdsd', err?.response?.data?.message);
    throw err;
  }
};

export const createCriteria = async (values) => {
  try {
    const response = await request.post('createCriterial', values);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getCriteria = async () => {
  try {
    const response = await request.post('getCriterial', {});
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createPrograms = async (values) => {
  try {
    const response = await request.post('createPrograms', values);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createAssignment = async (values) => {
  try {
    const response = await request.post('createAssignment', values);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getPrograms = async (
  values = {
    limit: 5,
    page: 1,
    query: {},
  }
) => {
  try {
    const response = await request.post('getPrograms', values);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAssignments = async () => {
  try {
    const response = await request.post('getAssignments', {
      limit: 5,
      page: 1,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const makeAdminRequest = async (endpoint, data) => {
  try {
    const response = await request.post(endpoint, data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const createBlog = async (values) => {
  try {
    console.log(values);
    const response = await request.post('v1/blog/create', values);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getAllBlog = async (
  values = {
    limit: 5,
    page: 1,
  }
) => {
  try {
    console.log(values);
    const response = await request.get('v1/blog', values);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getBlog = async (values) => {
  try {
    console.log(values);
    const response = await request.post('v1/blog/details', {
      slug: values,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const deleteBlog = async (values) => {
  try {
    console.log(values);
    const response = await request.post('v1/blog/delete', {
      slug: values,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const updateBlog = async ({ payload, slug }) => {
  try {
    const response = await request.post('v1/blog/update', {
      payload: payload,
      slug: slug,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const createPage = async (value) => {
  try {
    const response = await request.post('v1/page/create', value);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getPages = async (
  values = {
    limit: 5,
    page: 1,
  }
) => {
  try {
    console.log(values);
    const response = await request.get('v1/page', values);
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const deletePage = async (values) => {
  try {
    const response = await request.post('v1/page/delete', {
      slug: values,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getPage = async (values) => {
  try {
    console.log(values);
    const response = await request.post('v1/page/details', {
      slug: values,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const updatePage = async ({ payload, slug }) => {
  try {
    const response = await request.post('v1/page/update', {
      payload: payload,
      slug: slug,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getStartups = async (
  values = {
    limit: 5,
    page: 1,
  }
) => {
  try {
    console.log(values);
    const response = await request.post(
      'v1/user/analytics?type=startup',
      values
    );
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const getStartup = async ({ _id, userType }) => {
  try {
    const response = await request.post('v1/profile/admin', {
      _id,
      userType,
    });
    return response.data;
  } catch (err) {
    console.log(err?.response?.data?.message);
    throw err;
  }
};

// export const createPrograms = async () => {
//   try {
//     const response = await request.post('createPrograms', {});
//     console.log(response.data);
//     return response.data;
//   } catch (err) {
//     throw err;
//   }
// };

// export const getPrograms = async (values) => {
//   try {
//     const response = await request.post('getPrograms', values);
//     return response.data;
//   } catch (err) {
//     console.log(err?.response?.data?.message);
//     throw err;
//   }

// };

//KV Member
